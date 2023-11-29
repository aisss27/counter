
type CounterPropsType = {
   count: number
}
export const Counter = (props: CounterPropsType) => {

    return (
        <div>
            <h1 className='title'>Magic Counter</h1>
            <div className='counter'>
                <div className='display'>{props.count}</div>
            </div>
        </div>
    );
};

