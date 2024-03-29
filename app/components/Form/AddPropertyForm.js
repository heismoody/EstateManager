import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppBottom({children}) {
  // ref
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
    setIsOpen(false);
  };
  // renders
  return (
    <GestureHandlerRootView
      className={`bg-black/70 absolute w-[100%] h-[100%] ${
        !isOpen && "hidden"
      }`}
    >
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["65%"]}
        enablePanDownToClose={true}
        onClose={closeBottomSheet}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
