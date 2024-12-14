import { Colors } from "../constans/colors";

export enum ButtonTypes {
  primary,
  navy,
}

interface ButtonTypeProps {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

export const ButtonProperties: Record<ButtonTypes, ButtonTypeProps> = {
  [ButtonTypes.primary]: {
    backgroundColor: Colors.primary,
    textColor: Colors.white,
  },
  [ButtonTypes.navy]: { backgroundColor: Colors.navy, textColor: Colors.white },
};
