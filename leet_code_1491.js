/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    max_sal = Math.max(...salary);
    min_sal = Math.min(...salary);
    sum = 0 ;
      for(let i =0; i < salary.length; i++){
        sum += salary[i];
      }
    no_of_items = salary.length;
    average_salary = (sum - max_sal - min_sal )/ (no_of_items - 2);
    return average_salary
};
