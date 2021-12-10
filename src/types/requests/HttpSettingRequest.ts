import { AnalyticsSettingsType, AssetConnectionSetting, AssetSettingsType, BillingSettingsType, CarConnectorConnectionSetting, CarConnectorSettings, CarConnectorSettingsType, ConcurRefundSetting, ConvergentChargingPricingSetting, CryptoSettingsType, OcpiSetting, OicpSetting, PricingSettingsType, RefundSettingsType, RoamingSettingsType, SimplePricingSetting, SmartChargingSettingsType, TechnicalSettings, UserSettingsType } from '../Setting';

import HttpByIDRequest from './HttpByIDRequest';
import HttpDatabaseRequest from './HttpDatabaseRequest';
import { TenantComponents } from '../Tenant';

export interface HttpSettingRequest extends HttpByIDRequest {
  ContentFilter: boolean;
}

export interface HttpSettingsRequest extends HttpDatabaseRequest {
  Identifier?: string;
  ContentFilter?: boolean;
}

export interface HttpSettingSetRequest {
  id?: string,
  identifier: TenantComponents | TechnicalSettings,
  sensitiveData: []
}

export interface HttpSettingOCPISetRequest extends HttpSettingSetRequest {
  content: {
    type: RoamingSettingsType,
    ocpi: OcpiSetting
  }
}

export interface HttpSettingOICPSetRequest extends HttpSettingSetRequest {
  content: {
    type: RoamingSettingsType,
    oicp: OicpSetting
  }
}

export interface HttpSettingUserSetRequest extends HttpSettingSetRequest {
  content: {
    type: UserSettingsType,
    user: {
      autoActivateAccountAfterValidation: boolean
    }
  }
}

export interface HttpSettingSmartChargingSetRequest extends HttpSettingSetRequest {
  content: {
    type: SmartChargingSettingsType,
    sapSmartCharging: {
      limitBufferAC: number,
      limitBufferDC: number,
      optimizerUrl: string,
      password: string,
      stickyLimitation: boolean,
      user: string
    }
  }
}

export interface HttpSettingRefundSetRequest extends HttpSettingSetRequest {
  content: {
    type: RefundSettingsType,
    concur: ConcurRefundSetting
  }
}

export interface HttpSettingPricingSetRequest extends HttpSettingSetRequest {
  content: {
    type: PricingSettingsType,
    simple?: SimplePricingSetting,
    convergentCharging?: ConvergentChargingPricingSetting
  }
}

export interface HttpSettingCryptoSetRequest extends HttpSettingSetRequest {
  content: {
    type: CryptoSettingsType,
    crypto: {
      key: string,
      keyProperties: {
        blockCypher: string,
        blockSize: number,
        operationMode: string
      }
    }
  }
}

export interface HttpSettingSacSetRequest extends HttpSettingSetRequest {
  content: {
    type: AnalyticsSettingsType,
    sac: {
      mainUrl: string,
      timezone: string
    }
  }
}

export interface HttpSettingBillingSetRequest extends HttpSettingSetRequest {
  content: {
    type: BillingSettingsType,
    billing: {
      isTransactionBillingActivated: boolean,
      immediateBillingAllowed: boolean,
      periodicBillingAllowed: boolean,
      taxID: string
    }
  }
}

export interface HttpSettingAssetSetRequest extends HttpSettingSetRequest {
  content: {
    type: AssetSettingsType,
    asset: {
      connections: AssetConnectionSetting[]
    }
  }
}

export interface HttpSettingCarConnectorSetRequest extends HttpSettingSetRequest {
  content: {
    type: CarConnectorSettingsType,
    carConnector: {
      connections: CarConnectorConnectionSetting[]
    }
  }
}
