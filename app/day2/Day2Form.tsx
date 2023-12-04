"use client";

import Form from "../Form";

type cubeCounter = {
  counter: number;
  max: number;
  limit: number;
};

type cubeColorCounter = {
  [name: string]: cubeCounter;
};

function Day2Form() {
  const getDefaultCubeCounter = (): cubeColorCounter => {
    return {
      red: {
        counter: 0,
        max: 0,
        limit: 12,
      },
      green: {
        counter: 0,
        max: 0,
        limit: 13,
      },
      blue: {
        counter: 0,
        max: 0,
        limit: 14,
      },
    };
  };

  const firstPart = (input: string) => {
    const lines = input.split("\n");
    let answer = 0;

    lines.forEach((line) => {
      const gameLines = line.split(":");
      const gameNumber = parseInt(gameLines[0].substring(5));
      const gameSets = gameLines[1].split(";");
      let impossible = false;

      for (const gameSet of gameSets) {
        const cubes = gameSet.trim().split(",");
        const counter: cubeColorCounter = getDefaultCubeCounter();
        cubes.forEach((cube) => {
          const cubeInfo = cube.trim().split(" ");
          const cubeCount = parseInt(cubeInfo[0]);
          const cubeColor = cubeInfo[1];
          counter[cubeColor].counter += cubeCount;
        });
        for (const key in counter) {
          if (counter[key].counter > counter[key].limit) {
            impossible = true;
            break;
          }
        }
        if (impossible) {
          break;
        }
      }
      if (!impossible) {
        answer += gameNumber;
      }
    });
    return answer.toString();
  };

  const secondPart = (input: string) => {
    const lines = input.split("\n");
    let answer = 0;

    lines.forEach((line) => {
      const gameLines = line.split(":");
      const gameSets = gameLines[1].split(";");
      const counter: cubeColorCounter = getDefaultCubeCounter();

      for (const gameSet of gameSets) {
        const cubes = gameSet.trim().split(",");
        cubes.forEach((cube) => {
          const cubeInfo = cube.trim().split(" ");
          const cubeCount = parseInt(cubeInfo[0]);
          const cubeColor = cubeInfo[1];
          counter[cubeColor].counter += cubeCount;
        });
        for (const key in counter) {
          counter[key].max = Math.max(counter[key].max, counter[key].counter);
          counter[key].counter = 0;
        }
      }
      let setPower = 1;
      for (const key in counter) {
        setPower *= counter[key].max;
      }
      answer += setPower;
    });
    return answer.toString();
  };

  return (
    <Form
      day={2}
      handleFirstPartSubmit={firstPart}
      handleSecondPartSubmit={secondPart}
    />
  );
}

export default Day2Form;
