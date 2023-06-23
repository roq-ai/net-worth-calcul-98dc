import { FinancialInformationInterface } from 'interfaces/financial-information';
import { NetWorthInterface } from 'interfaces/net-worth';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  financial_information?: FinancialInformationInterface[];
  net_worth?: NetWorthInterface[];
  user?: UserInterface;
  _count?: {
    financial_information?: number;
    net_worth?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
