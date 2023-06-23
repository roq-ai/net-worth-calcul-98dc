import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NetWorthInterface {
  id?: string;
  organization_id: string;
  calculated_by_user_id: string;
  value: number;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface NetWorthGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  calculated_by_user_id?: string;
}
