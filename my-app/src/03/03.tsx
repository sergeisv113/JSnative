import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildings, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive(s: StudentType) { //s=student
    s.isActive = true
}
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}
export const addMoneyToBudget = (building: GovernmentBuildings, budget: number) => {
    building.budget += budget
}
/*
export const demolisshHousesOnTheStreet = (city: CityType, happyStreet: string) => {
}*/
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}
export function toFireStaff (building: GovernmentBuildings, staffCountToFire: number){
 building.staffCount -= staffCountToFire
}
export function toHireStaff (building: GovernmentBuildings, staffCountToHire: number){
 building.staffCount += staffCountToHire
}
export function createMessage(city: CityType) {
    return 'Hello ' + city.title + '. I want you be happy. All ' + city.citizensNumber + ' man.'
}