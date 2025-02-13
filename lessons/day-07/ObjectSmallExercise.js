// Data
const teo = {name: "Teo", grades: [9,8,6]};
const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [7,8,9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6,7,8];

// Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
const { bestStudent, currentHighestScore } = bestStudentInfo;
console.log(`The best student with highest avg score is: ${JSON.stringify(bestStudent)} with score: ${currentHighestScore}`);

// Controler
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighestScore = 0;
    for (const student of students) {
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return {
        bestStudent, currentHighestScore
    };
}

function calculateAverageScore({ grades }) {
    let totalScore = 0;
    for (const grade of grades) {
        totalScore += grade;
    }
    return Math.ceil(totalScore / grades.length);
}