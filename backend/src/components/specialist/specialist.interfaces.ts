export interface ICreateSpecialist{
  email:string
  password:string,
  name: string,
  education: string,
  specialization: string,
  }
export interface ISpecialist {
    id: number,
    email:string
    password:string,
    name: string,
    education: string,
    specialization: string,
  }
export interface ISpecialistSerialized {
  id: number,
  email:string
  password:string,
  name: string,
  education: string,
  specialization: string,
}