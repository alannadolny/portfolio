import Timeline from "../../timeline/Timeline.tsx";

const dataset = [
    {
        titleLeftLabel: 'SolDevelo',
        titleRightLabel: 'Software Developer',
        contentRightLabel: '-||-',
        timeRangeLabel: 'March 2025 - Present',
        pointColor: 'rgb(75, 42, 29)',
    },
    {
        titleLeftLabel: 'SolDevelo',
        titleRightLabel: 'Junior Software Developer',
        contentRightLabel: 'Implementing new functionalities in an open-source\n' +
            'application using React and Groovy with Grails, writing unit\n' +
            'tests, improving E2E tests, documenting changes made, and\n' +
            'planning future work.',
        timeRangeLabel: 'December 2022 - March 2025',
        pointColor: 'rgb(28, 90, 103)',
    },
]

const Experience = () => {
    return (
        <div id="experience">
            <Timeline id="education" dataset={dataset} />
        </div>
    )
}

export default Experience;
