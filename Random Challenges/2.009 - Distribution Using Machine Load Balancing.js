/* TASK

A company is developing a new algorithm to distribute tasks among several machines. 
There are num_machines machines numbered from 0 to num_machines - 1, and initially, 
the number of tasks assigned to each machine is 0.

In the ith second, a task arrives that must be processed by one of the machines. 
Each task has an associated index task[i], and it must be assigned to the machine 
with the fewest tasks among the first task[i] machines. If task[i] = 4, the task 
must be assigned to the machine with the minimum number of tasks from the machines 
with ids [0, 1, 2, 3]. If multiple machines have the same number of tasks, 
choose the one with the smallest id. When a task is assigned to a machine, 
the number of tasks on that machine increases by 1.

Given num_machines and an array task, for each task, determine the id of the machine 
it is assigned to.

Example:

Suppose num_machines = 5, n = 5 and task = [3, 2, 3, 2, 4].

The tasks are processed as follows:

Task ID | Machine Task Allocation | Assigned to | Remarks
3       | [0, 0, 0, 0, 0]         | 0           | The task must be assigned to the machine with the fewest tasks among the first 3 machines. Since all the first three machines have 0 tasks assigned, it is assigned to the one with the smallest id, i.e. machine 0.
2       | [1, 0, 0, 0, 0]         | 1           | The task must be assigned to the machine with the fewest tasks among the first 2 machines. Since machine 1 has 0 tasks and machine 0 has 1 task, it's assigned to machine 1.
3       | [1, 1, 0, 0, 0]         | 2           | Among the first 3 machines, machine 2 has the fewest tasks.
2       | [1, 1, 1, 0, 0]         | 0           | Both machine 0 and machine 1 have the same number of tasks, so the task is assigned to machine 0 because it has the smallest id.
4       | [2, 1, 1, 0, 0]         | 3           | The task must be assigned to the machine with the fewest tasks among the first 4 machines. Machine 3 has the fewest tasks.

Hence the answer is [0, 1, 2, 0, 3].

Function Description:

Complete the function assignTasks in the editor below. 

assignTasks takes the following arguments:
- int num_machines: the number of machines
- int task[n]: the size of the task array

Returns:
- int[n]: the ids of the machines each task is assigned to

Constraints:
- 1 <= num_machines <= 10^5
- 0 <= task[i] < num_machines
*/

function assignTasks(num_machines, tasks) {
    // Initialize an array to keep track of the number of tasks assigned to each machine
    let machineLoads = new Array(num_machines).fill(0);
    // Initialize the result array to store the machine IDs for each task
    let result = [];
  
    // Iterate over each task
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        // Set minLoad to machineLoads[0] instead of Infinity for optimization
        let minLoad = machineLoads[0];
        let machineId = 0;
        
        for (let j = 0; j <= task; j++) {
            if (machineLoads[j] < minLoad) {
                minLoad = machineLoads[j];
                machineId = j;
            }
        }
  
        // Assign the task to the machine with the minimum load
        result.push(machineId);
        // Update the machine's load count
        machineLoads[machineId]++;
    }
  
    return result;
  }

