type LeftPointInfoProps = {
    title: string,
    content?: string,
    contentArray?: string[],
};

const PointInfo = ({ title, content, contentArray }: LeftPointInfoProps) => {
    return (
        <div className="point-info">
            <span className="point-info-title">
                {title}
            </span>
            <p className="point-info-content">
                {content ? content : ''}
                {contentArray ? contentArray.map(arrayItem => (
                    <li>
                        {arrayItem}
                    </li>
                )) : ''}
            </p>
        </div>
    )
}

export default PointInfo;
