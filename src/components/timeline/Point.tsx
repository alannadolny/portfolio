type PointProps = {
    color: string,
};

const Point = ({ color }: PointProps) => {
    return (
        <div className='point-outer'>
            <div className='point-inner' style={{ background: color }} />
        </div>
    )
}

export default Point;