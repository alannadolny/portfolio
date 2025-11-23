import Point from "./Point.tsx";
import './timeline.scss';
import PointInfo from "./PointInfo.tsx";

type TimelineProps = {
    id: string,
    dataset: {
        titleLeftLabel: string,
        titleRightLabel: string,
        contentRightLabel?: string,
        contentRightLabelArray?: string[]
        timeRangeLabel: string,
        pointColor: string,
    }[],
};

const Timeline = ({ id, dataset }: TimelineProps) => {
    return (
        <div id={`timeline-${id}`}>
            {dataset.map((data) => (
                <div className="point-wrapper">
                    <PointInfo
                        title={data.titleLeftLabel}
                        content={data.timeRangeLabel}
                    />
                    <div className="point-right-wrapper">
                        <div>
                            <Point color={data.pointColor} />
                            <div className="points-separator" />
                        </div>
                        <PointInfo
                            title={data.titleRightLabel}
                            content={data.contentRightLabel}
                            contentArray={data.contentRightLabelArray}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline;