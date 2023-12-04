"use client";

import Form from "../Form";

function Day1Form() {
  const firstPart = (input: string) => {
    const lines = input.split("\n");
    let answer = 0;
    lines.forEach((line) => {
      let first = "";
      let last = "";
      for (let i = 0; i < line.length; i++) {
        const element = line[i];
        if (element.match(/[0-9]/i)) {
          if (first === "") {
            first = element;
          }
          last = element;
        }
      }
      answer += parseInt(first + last);
    });
    return answer.toString();
  };

  const mapping: { [name: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const secondPart = (input: string) => {
    const lines = input.split("\n");
    let answer = 0;
    lines.forEach((line) => {
      let first = "";
      let last = "";
      for (let i = 0; i < line.length; i++) {
        const element = line[i];
        if (element.match(/[0-9]/i)) {
          if (first === "") {
            first = element;
          }
          last = element;
        } else {
          for (const key in mapping) {
            if (
              i + key.length <= line.length &&
              line.substring(i, i + key.length) === key
            ) {
              const actualNumber = mapping[key];
              if (first === "") {
                first = actualNumber;
              }
              last = actualNumber;
            }
          }
        }
      }
      answer += parseInt(first + last);
    });
    return answer.toString();
  };

  return (
    <Form
      day={1}
      handleFirstPartSubmit={firstPart}
      handleSecondPartSubmit={secondPart}
    />
  );
}

export default Day1Form;
