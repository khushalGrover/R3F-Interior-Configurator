import React, { useRef } from 'react'
import { BuildingGroup } from './BuildingGroup';
import { BedRoom} from './BedRoom';
import { Drawing } from './Drawing';
import { Dinning } from './Dinning';
import { Hall } from './Hall';
import { Kitchen_1} from './Kitchen_1';
import { Kitchen_2} from './Kitchen_2';
import { Stairs } from './Stairs';
import { StudyArea} from './StudyArea';
import { UIManager } from './UIManager';
import { SwimmingPool } from './SwimmingPool';
import { MasterBedRoom } from './MasterBedRoom';

export function Building(props) {
  return (
    <>
      <BuildingGroup/>
      <BedRoom/>
      <Drawing/>
      <Dinning/>
      <Hall/>
      <Kitchen_1/>
      <Kitchen_2/>
      <Stairs/>
      <StudyArea/>
      <UIManager/>
      <SwimmingPool/>
      <MasterBedRoom/>
    </>
  )
}

