import { useCustomization } from "../constants/Customization";

export function UpdateObjectCode(tIndex, value, objectCode, setObjectCode) {
	// const { objectCode, setObjectCode } = useCustomization();
	switch (tIndex) {
		case 0:
			setObjectCode.setObjectCode(value + objectCode.objectCode.charAt(1) + objectCode.objectCode.slice(2));
			break;
		case 1:
			setObjectCode.setObjectCode(objectCode.objectCode.charAt(0) + value + objectCode.objectCode.slice(2));

			break;
		case 2:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					value +
					objectCode.objectCode.slice(3)
			);

			break;
		case 3:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					(value + 1) +
					objectCode.objectCode.slice(4)
			);
			break;
		case 4:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					(value + 1) +
					objectCode.objectCode.slice(5)
			);
			break;
		case 5:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					(value + 1) +
					objectCode.objectCode.slice(6)
			);
			break;
		case 6:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					(value + 1) +
					objectCode.objectCode.slice(7)
			);
			break;
		case 7:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					(value + 1) +
					objectCode.objectCode.slice(8)
			);
			break;
		case 8:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					(value + 1) +
					objectCode.objectCode.slice(9)
			);
			break;
		case 9:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					(value + 1) +
					objectCode.objectCode.slice(10)
			);
			break;
		case 10:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					(value + 1) +
					objectCode.objectCode.slice(11)
			);
			break;
		case 11:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					(value + 1) +
					objectCode.objectCode.slice(12)
			);
			break;
		case 12:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					(value + 1) +
					objectCode.objectCode.slice(13)
			);
			break;
		case 13:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					(value + 1) +
					objectCode.objectCode.slice(14)
			);
			break;
		case 14:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					(value + 1) +
					objectCode.objectCode.slice(15)
			);
			break;
		case 15:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					(value + 1) +
					objectCode.objectCode.slice(16)
			);
			break;
		case 16:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					objectCode.objectCode.charAt(15) +
					(value + 1) +
					objectCode.objectCode.slice(17)
			);
			break;
		case 17:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					objectCode.objectCode.charAt(15) +
					objectCode.objectCode.charAt(16) +
					(value + 1) +
					objectCode.objectCode.slice(18)
			);
			break;
		case 18:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					objectCode.objectCode.charAt(15) +
					objectCode.objectCode.charAt(16) +
					objectCode.objectCode.charAt(17) +
					(value + 1) +
					objectCode.objectCode.slice(19)
			);
			break;
		case 19:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					objectCode.objectCode.charAt(15) +
					objectCode.objectCode.charAt(16) +
					objectCode.objectCode.charAt(17) +
					objectCode.objectCode.charAt(18) +
					(value + 1) +
					objectCode.objectCode.slice(20)
			);
			break;
		case 20:
			setObjectCode.setObjectCode(
				objectCode.objectCode.charAt(0) +
					objectCode.objectCode.charAt(1) +
					objectCode.objectCode.charAt(2) +
					objectCode.objectCode.charAt(3) +
					objectCode.objectCode.charAt(4) +
					objectCode.objectCode.charAt(5) +
					objectCode.objectCode.charAt(6) +
					objectCode.objectCode.charAt(7) +
					objectCode.objectCode.charAt(8) +
					objectCode.objectCode.charAt(9) +
					objectCode.objectCode.charAt(10) +
					objectCode.objectCode.charAt(11) +
					objectCode.objectCode.charAt(12) +
					objectCode.objectCode.charAt(13) +
					objectCode.objectCode.charAt(14) +
					objectCode.objectCode.charAt(15) +
					objectCode.objectCode.charAt(16) +
					objectCode.objectCode.charAt(17) +
					objectCode.objectCode.charAt(18) +
					objectCode.objectCode.charAt(19) +
					(value + 1) +
					objectCode.objectCode.slice(21)
			);
			break;
	}

	// return objectCode;
}
