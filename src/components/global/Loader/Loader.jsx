import { Vortex } from 'react-loader-spinner';

const Loader = ({ customStyles }) => {
    return (
        <Vortex
            visible={true}
            height='120'
            width='120'
            ariaLabel='vortex-loading'
            wrapperStyle={customStyles ? customStyles : {}}
            colors={[
                '#E6533C',
                '#EF8964',
                '#EFA082',
                '#73757C',
                '#2C2C2F',
                '#181819'
            ]}
        />
    );
};

export { Loader };