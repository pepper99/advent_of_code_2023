"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  day: number;
  handleFirstPartSubmit: (input: string) => string;
  handleSecondPartSubmit: (input: string) => string;
};

function Form({ day, handleFirstPartSubmit, handleSecondPartSubmit }: Props) {
  const [firstPartResult, setFirstPartResultResult] = useState<
    string | undefined
  >(undefined);
  const [secondPartResult, setSecondPartResultResult] = useState<
    string | undefined
  >(undefined);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input = data.get("input") as string;
    setFirstPartResultResult(handleFirstPartSubmit(input));
    setSecondPartResultResult(handleSecondPartSubmit(input));
  };

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="p-4 h-fit max-w-4xl w-1/2 shadow-xl hover:shadow-2xl hover:shadow-pink-600/30 transition-all duration-500 bg-zinc-800 shadow-pink-600/20 rounded-md">
        <Link
          href={`https://adventofcode.com/2023/day/${day}`}
          target="_blank"
          className="block w-fit mx-auto"
        >
          <h1 className="text-2xl text-left w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 select-none hover:text-pink-500 transition-colors">
            Day {day}
          </h1>
        </Link>
        <form onSubmit={onSubmit} className="p-2">
          <div>
            <label htmlFor="input">
              <p className="text-pink-300 text-sm mb-1 select-none">Input</p>
            </label>
            <textarea
              name="input"
              className="w-full h-24 max-h-36 bg-zinc-900 text-white rounded-lg focus:ring-pink-500 focus:border-pink-500 block p-2"
            />
          </div>
          <button
            type="submit"
            value="Submit"
            className="my-2 mx-auto block rounded-full font-bold text-center text-md p-1 w-52 bg-pink-400 hover:bg-pink-600 hover:scale-105 shadow-lg shadow-pink-600/70 transition duration-200 text-white"
          >
            Submit
          </button>
        </form>
      </div>

      <div
        className={`p-4 ml-4 h-fit transition-all duration-500 max-w-4xl shadow-xl bg-zinc-800 hover:shadow-2xl hover:shadow-amber-600/30 shadow-amber-600/20 rounded-md ${
          firstPartResult || secondPartResult
            ? "opacity-100 w-1/4"
            : "opacity-0"
        }`}
      >
        <h1 className="text-2xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 select-none">
          Result
        </h1>
        {firstPartResult && (
          <>
            <p className="text-sm text-amber-200">1st Part</p>
            <p className="text-white">{firstPartResult}</p>
          </>
        )}
        {secondPartResult && (
          <>
            <p className="text-sm text-amber-200">2nd Part</p>
            <p className="text-white">{secondPartResult}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
