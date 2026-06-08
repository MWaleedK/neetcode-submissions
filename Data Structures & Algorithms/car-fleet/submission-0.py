class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = [(p, (target - p) / s) for p, s in zip(position, speed)]
    
    # sort by position descending (closest to target first)
        cars.sort(reverse=True)
        print(cars)
        fleets = 0
        current_max_time = 0

        for pos, time in cars:
            if time > current_max_time:
                fleets += 1
                current_max_time = time

        return fleets
