function CircularProgress({ percentage }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width="120"
      height="120"
      className="mx-auto"
      role="img"
      aria-label={`Skill proficiency: ${percentage}%`}
    >
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="transparent"
        stroke="#e5e7eb"
        strokeWidth="10"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="transparent"
        stroke="#3b82f6"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="20"
        fill="#3b82f6"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
  ];

  return (
    <div
      id="skills"
      className="max-w-4xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <h2 className="text-2xl font-bold text-center col-span-2 mb-6">My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="text-center">
          <CircularProgress percentage={skill.percentage} />
          <p className="text-lg font-medium mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
