enum GenderEnum {
  male = "male",
  female = "female",
}

interface Address {
  address: string,
  city: string,
  coordinates: {
    lat: number,
    lng: number,
  },
  postalCode: string,
  state: string,
}

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: 50,
  gender: GenderEnum,
  email: string,
  phone: string,
  userName: string,
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: {
    color: string,
    type: string
  },
  domain: string,
  ip: string,
  address: Address,
  macAddress: string,
  university: string,
  bank: {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string,
  },

  company: {
    address: Address,
    department: string,
    name: string,
    title: string,
  },
  ein: string,
  ssn: string,
  userAgent: string,
}

export interface GetUsersResponse {
  users: User[],
  total: number,
}

export interface ApiError {
  code?: string,
  status?: number | null,
  message?: string,
}
