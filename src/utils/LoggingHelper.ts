import Asset from '../types/Asset';
import ChargingStation from '../types/ChargingStation';
import Site from '../types/Site';
import SiteArea from '../types/SiteArea';
import Transaction from '../types/Transaction';
import User from '../types/User';

export default class LoggingHelper {

  public static getTransactionProperties(transaction: Transaction): { siteID: string; siteAreaID: string; companyID: string; chargingStationID: string; actionOnUser: User } {
    return {
      siteID: transaction.siteID,
      siteAreaID: transaction.siteAreaID,
      companyID: transaction.companyID,
      chargingStationID: transaction.chargeBoxID,
      actionOnUser: transaction.user,
    };
  }

  public static getChargingStationProperties(chargingStation: ChargingStation): { siteID: string; siteAreaID: string; companyID: string; chargingStationID: string; } {
    return {
      siteID: chargingStation.siteID,
      siteAreaID: chargingStation.siteAreaID,
      companyID: chargingStation.companyID,
      chargingStationID: chargingStation.id,
    };
  }

  public static getAssetProperties(asset: Asset): { siteID: string; siteAreaID: string; } {
    return {
      siteID: asset.siteID,
      siteAreaID: asset.siteAreaID,
    };
  }

  public static getSiteProperties(site: Site): { siteID: string; companyID: string; } {
    return {
      siteID: site.id,
      companyID: site.companyID,
    };
  }

  public static getSiteAreaProperties(siteArea: SiteArea): { siteID: string; siteAreaID: string; } {
    return {
      siteAreaID: siteArea.id,
      siteID: siteArea.siteID,
    };
  }
}
