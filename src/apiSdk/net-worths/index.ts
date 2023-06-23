import axios from 'axios';
import queryString from 'query-string';
import { NetWorthInterface, NetWorthGetQueryInterface } from 'interfaces/net-worth';
import { GetQueryInterface } from '../../interfaces';

export const getNetWorths = async (query?: NetWorthGetQueryInterface) => {
  const response = await axios.get(`/api/net-worths${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createNetWorth = async (netWorth: NetWorthInterface) => {
  const response = await axios.post('/api/net-worths', netWorth);
  return response.data;
};

export const updateNetWorthById = async (id: string, netWorth: NetWorthInterface) => {
  const response = await axios.put(`/api/net-worths/${id}`, netWorth);
  return response.data;
};

export const getNetWorthById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/net-worths/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNetWorthById = async (id: string) => {
  const response = await axios.delete(`/api/net-worths/${id}`);
  return response.data;
};
