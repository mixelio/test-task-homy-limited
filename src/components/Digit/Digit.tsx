/**
 * it shows a digit with a delete button
 * 
 * @param {number} digit - the diget to be displayed
 * @param {number} index - the index of the digit in the array
 * @param {function} handleDeleteDigit - the function to delete the digit
*/

import { CircleX } from "lucide-react";
import styles from "./Digit.module.scss";

type Props = {
  digit: number;
  index: number;
  handleDeleteDigit: (i: number) => void;
};

export const Digit: React.FC<Props> = ({
  digit,
  index,
  handleDeleteDigit,
}) => {
  return (
    <div className={styles.digitContainer}>
      <span className={styles.digitValue}>{digit}</span>
      <button className={styles.deleteButton} onClick={() => handleDeleteDigit(index)}>
        <CircleX className={styles.deleteImage} />
      </button>
    </div>
  );
};