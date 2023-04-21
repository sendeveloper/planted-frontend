import { calculateDistance } from "./utils";

describe("calculateDistance", () => {
    test("returns the correct distance between two coordinates", () => {
        const latEiffelTower = 48.8584;
        const lonEiffelTower = 2.2945;
        const latStatueOfLiberty = 40.6892;
        const lonStatueOfLiberty = -74.0445;

        const distance = calculateDistance(latEiffelTower, lonEiffelTower, latStatueOfLiberty, lonStatueOfLiberty);
        const roundedDistance = Math.round(distance * 100) / 100; // Round to two decimal places

        expect(roundedDistance).toBe(5837.42);
    });
})