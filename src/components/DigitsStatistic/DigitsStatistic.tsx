/**
 * @fileoverview Digit component
 * @description This component is responsible for displaying a list of digits and some calculations based on them.
 * 
 */

import {useRef, useState, type ChangeEvent} from "react";
import { Digit } from "../Digit/Digit";
import styles from "./DigitsStatistic.module.scss";
import debounce from "lodash/debounce";

export const DigitsStatistic = () => {
  // save the current input value
  const [digit, setDigit] = useState<number | null>(null);

  // save digits in state and in local storage
  const [digits, setDigits] = useState<number[]>(
    localStorage.getItem("digits")
      ? JSON.parse(localStorage.getItem("digits") as string) // if local storage is not empty, we are parsing it
      : []
  );

  const inputRef = useRef<HTMLInputElement>(null); // get the input element

  
  const handleInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setDigit(Number(event.target.value));
  }, 300);

  const handleAddDigit = () => {
    if (String(digit).trim() === "" || digit === null) {
      if (inputRef.current) {
        inputRef.current.value = "";
        setDigit(null);
        inputRef.current.focus();
      }

      alert("input is empty");
      return;
    }

    if (!Number(digit)) {
      if (inputRef.current) {
        inputRef.current.value = "";
        setDigit(null);
        inputRef.current.focus();
      }

      alert("Input is not a number");
      return;
    }

    setDigits((prevState) => {
      return [...prevState, digit as number];
    });

    localStorage.setItem(
      "digits",
      JSON.stringify([...digits, digit as number])
    );

    if (inputRef.current) {
      inputRef.current.value = "";
      setDigit(null);
      inputRef.current.focus();
    }
  };

  const handleDeleteDigit = (index: number) => {
    setDigits(digits.filter((_, i) => i !== index));
    localStorage.setItem(
      "digits",
      JSON.stringify(digits.filter((_, i) => i !== index))
    );
  };

  return (
    <section className={styles.digitsStatistic}>
      <div className={styles.managingContainer}>
        <input ref={inputRef} type="text" onChange={handleInputChange} />
        <button className={styles.addDigitButton} onClick={handleAddDigit}>
          add digit
        </button>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.digits}>
          {digits.map((item, index) => (
            <Digit
              key={index}
              digit={item}
              index={index}
              handleDeleteDigit={handleDeleteDigit}
            />
          ))}
        </div>

        <div className={styles.calculationContainer}>
          <div className={styles.calculationValue}>
            <span>Average:</span>
            <span>
              {digits.length > 0
                ? Math.round(
                    digits.reduce((summ, curr) => summ + curr, 0) /
                      digits.length
                  )
                : "-"}
            </span>
          </div>
          <div className={styles.calculationValue}>
            <span>Max:</span>
            <span>{digits.length > 0 ? Math.max(...digits) : "-"}</span>
          </div>
          <div className={styles.calculationValue}>
            <span>Min:</span>
            <span>{digits.length > 0 ? Math.min(...digits) : "-"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}