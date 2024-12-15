import { Colors } from "@/src/utils/constans/colors";
import CircleView from "./circle-view";

export default function RadioButton(props: any) {
  return props.isSelected ? (
    <CircleView color={Colors.primary} height={20} width={20}>
      <CircleView color={Colors.white} height={16} width={16}>
        <CircleView
          children={undefined}
          color={Colors.primary}
          height={12}
          width={12}
        ></CircleView>
      </CircleView>
    </CircleView>
  ) : (
    <CircleView color={Colors.black} height={20} width={20}>
      <CircleView
        children={undefined}
        color={Colors.white}
        height={16}
        width={16}
      ></CircleView>
    </CircleView>
  );
}
