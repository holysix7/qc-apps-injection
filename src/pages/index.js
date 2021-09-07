/**
 * Auth Process
 */
import SplashScreen from './SplashScreen';
import BoardingScreen from './SplashScreen/BoardingScreen';
import Login from './Login';

/**
 * Etc.
 */
import Profile from './Qc/Profile';
import OQC from './Qc/OQC';
import Scanner from './Qc/OQC/Scanner';

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

import ListMasspro from './Qc/Form/StartMP/Index';
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

/**
 * CONTINUE MP
 */
import ContinueMP from './Qc/Form/ContinueMP/Index';
import NextDay from './Qc/Form/ContinueMP/NextDay';
import UpdateProductionLeader from './Qc/Form/ContinueMP/UpdateProductionLeader';
import UpdateForemanLeader from './Qc/Form/ContinueMP/UpdateForemanLeader';

/**
 * LAPORAN REWORK PRODUCT LOT OUT
 */
import ShowNGProducts from './Qc/ReworkLotOut/index';
import Rework from './Qc/ReworkLotOut/LaporanReworkProductLotOut';
import ReworkProdLeader from './Qc/ReworkLotOut/Form/ReworkProdLeader';
import ReworkQCLeader from './Qc/ReworkLotOut/Form/ReworkQCLeader';
import ReworkOperator from './Qc/ReworkLotOut/Form/ReworkOperator';

/**
 * IQC
 */
import IQC from './Qc/IQC/Index';
import ListPartNumber from './Qc/IQC/ListPartNumber';
import FormIQC from './Qc/IQC/FormIQC';

export {
    SplashScreen,
    Login,
    Qc,
    BoardingScreen,
    ShowProducts,
    ListForm,
    ShowPlanning,
    ListMasspro,
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
    UpdateProductionLeader,
    UpdateForemanLeader,
    Scanner,
    ContinueMP,
    StopMP,
    OQC,
    NextDay,
    ShowNGProducts,
    Rework,
    ReworkProdLeader,
    ReworkQCLeader,
    ReworkOperator,
    IQC,
    ListPartNumber,
    FormIQC
}