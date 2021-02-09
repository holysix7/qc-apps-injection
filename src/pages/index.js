/**
 * Auth Process
 */
import SplashScreen from './SplashScreen';
import BoardingScreen from './SplashScreen/BoardingScreen';
import Login from './Login';

/**
 * Base Apps
 */
import Qc from './Qc';
import ShowProducts from './Qc/ShowProducts';
import ListForm from './Qc/ListForm';
import ShowPlanning from './Qc/ShowPlanning';
 
/**
 * START MP
 */

import MassproBeginMaintMold from './Qc/Form/StartMP/MassproBeginMaintMold';
import MassproBeginMaterialPreparation from './Qc/Form/StartMP/MassproBeginMaterialPreparation';
import MassproBeginMoldSetter from './Qc/Form/StartMP/MassproBeginMoldSetter';
import MassproBeginTechInjection from './Qc/Form/StartMP/MassproBeginTechInjection';
import MassproBeginProdLeader from './Qc/Form/StartMP/MassproBeginProdLeader';
import MassproBeginQCLeader from './Qc/Form/StartMP/MassproBeginQCLeader';
import MassproBeginForeman from './Qc/Form/StartMP/MassproBeginForeman';

/**
 * DAILY INSPECTION
 */

import PerJam from './Qc/Form/DailyInspection/IPQC/PerJam';
import Per4Jam from './Qc/Form/DailyInspection/IPQC/Per4Jam';
import PerShift from './Qc/Form/DailyInspection/IPQC/PerShift';
import RevisiFirstPieceLeaderQc from './Qc/Form/DailyInspection/RevisiFirstPieceLeaderQc';
import RevisiFirstPieceForeman from './Qc/Form/DailyInspection/RevisiFirstPieceForeman';

/**
 * STOP MP
 */

import StopMP from './Qc/Form/StopMP/Index';
import LastShootLeaderQc from './Qc/Form/StopMP/LastShootLeaderQc';
import LastShootForeman from './Qc/Form/StopMP/LastShootForeman';
import Profile from './Qc/Profile';
import OQC from './Qc/OQC';
import Scanner from './Qc/OQC/Scanner';

/**
 * CONTINUE MP
 */
import ContinueMP from './Qc/Form/ContinueMP/Index';
import UpdateProductionLeader from './Qc/Form/ContinueMP/UpdateProductionLeader';
import UpdateForemanLeader from './Qc/Form/ContinueMP/UpdateForemanLeader';

export {
    SplashScreen,
    Login,
    Qc,
    BoardingScreen,
    ShowProducts,
    ListForm,
    ShowPlanning,
    MassproBeginMaintMold,
    MassproBeginMaterialPreparation,
    MassproBeginMoldSetter,
    MassproBeginTechInjection,
    MassproBeginProdLeader,
    MassproBeginQCLeader,
    MassproBeginForeman,
    PerJam,
    Per4Jam,
    PerShift,
    RevisiFirstPieceLeaderQc,
    RevisiFirstPieceForeman,
    LastShootLeaderQc,
    LastShootForeman,
    Profile,
    OQC,
    UpdateProductionLeader,
    UpdateForemanLeader,
    Scanner,
    ContinueMP,
    StopMP
}