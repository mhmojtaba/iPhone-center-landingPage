import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "../Lights";
import { Suspense } from "react";
import IphoneModel from "../3DModels/IphoneModel";
import * as THREE from "three";
import Loading from "../Loading";
/* eslint-disable react/prop-types */
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ?'right-[-100px] :""`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngel())}
      />

      <group
        name={`${index === 1} ? 'small' : 'large'`}
        ref={groupRef}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loading />}>
          <IphoneModel
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
