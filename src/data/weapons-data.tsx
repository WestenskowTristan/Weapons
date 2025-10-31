import axios, { AxiosInstance } from "axios";
import { get } from "../utils/env";

export enum WeaponAmmo {
  FiveFiveSix = "556",
  SevenSixTwo = "762",
  NineMillimeter = "9mm",
}

export type Weapon = {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  image: string;
  name: string;
  ammo: WeaponAmmo;
};

export class WeaponsClient {
  constructor(private httpClient: AxiosInstance) {}

  get = async (id: string) =>
    this.httpClient
      .get(`/api/v1/weapons/${id}`)
      .then((res) => res.data as Weapon);
}

export const weaponsClient = new WeaponsClient(
  axios.create({
    paramsSerializer: {
      indexes: null,
    },
    baseURL: get("VITE_WEAPONS_API_ENDPOINT")
  })
);

export const useWeaponsClient = () => {
  return weaponsClient;
};