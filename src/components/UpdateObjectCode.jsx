import React, { useState } from "react";
import { useCustomization } from "../constants/Customization";

export function UpdateObjectCode(target, value) {
    const { objectCode, setObjectCode } = useCustomization();
    // in case 3 and case4, value is incremented by 1 bcz the value starts from 1 not 0 , bcz none option is not included for legs and seat
    
    console.log("update code objec call with index", target, "and value", value, "objectCode", objectCode)
    switch (target) {
        case 0:
            setObjectCode(
                value + objectCode.charAt(1) + objectCode.slice(2)
            );
            break;
        case 1:
            setObjectCode(
                objectCode.charAt(0) + value + objectCode.slice(2)
            );

            break;
        case 2:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    value +
                    objectCode.slice(3)
            );
            
            break;
        case 3:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    (value + 1) +
                    objectCode.slice(4)
            );
            break;
        case 4:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    (value + 1) +
                    objectCode.slice(5)
            );
            break;
        case 5:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    (value + 1) +
                    objectCode.slice(6)
            );
            break;
        case 6:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    (value + 1) +
                    objectCode.slice(7)
            );
            break;
        case 7:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    (value + 1) +
                    objectCode.slice(8)
            );
            break;
        case 8:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    (value + 1) +
                    objectCode.slice(9)
            );
            break;
        case 9:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    (value + 1) +
                    objectCode.slice(10)
            );
            break;
        case 10:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    (value + 1) +
                    objectCode.slice(11)
            );
            break;
        case 11:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    (value + 1) +
                    objectCode.slice(12)
            );
            break;
        case 12:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    (value + 1) +
                    objectCode.slice(13)
            );
            break;
        case 13:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    (value + 1) +
                    objectCode.slice(14)
            );
            break;
        case 14:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    (value + 1) +
                    objectCode.slice(15)
            );
            break;
        case 15:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    (value + 1) +
                    objectCode.slice(16)
            );
            break;
        case 16:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    objectCode.charAt(15) +
                    (value + 1) +
                    objectCode.slice(17)
            );
            break;
        case 17:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    objectCode.charAt(15) +
                    objectCode.charAt(16) +
                    (value + 1) +
                    objectCode.slice(18)
            );
            break;
        case 18:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    objectCode.charAt(15) +
                    objectCode.charAt(16) +
                    objectCode.charAt(17) +
                    (value + 1) +
                    objectCode.slice(19)
            );
            break;
        case 19:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    objectCode.charAt(15) +
                    objectCode.charAt(16) +
                    objectCode.charAt(17) +
                    objectCode.charAt(18) +
                    (value + 1) +
                    objectCode.slice(20)
            );
            break;
        case 20:
            setObjectCode(
                objectCode.charAt(0) +
                    objectCode.charAt(1) +
                    objectCode.charAt(2) +
                    objectCode.charAt(3) +
                    objectCode.charAt(4) +
                    objectCode.charAt(5) +
                    objectCode.charAt(6) +
                    objectCode.charAt(7) +
                    objectCode.charAt(8) +
                    objectCode.charAt(9) +
                    objectCode.charAt(10) +
                    objectCode.charAt(11) +
                    objectCode.charAt(12) +
                    objectCode.charAt(13) +
                    objectCode.charAt(14) +
                    objectCode.charAt(15) +
                    objectCode.charAt(16) +
                    objectCode.charAt(17) +
                    objectCode.charAt(18) +
                    objectCode.charAt(19) +
                    (value + 1) +
                    objectCode.slice(21)
            );
            break;
    }

    console.log(objectCode, "objectCode");

    return null;
}