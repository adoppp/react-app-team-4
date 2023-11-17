import { Vortex } from 'react-loader-spinner';

const Loader = ({ customStyles }) => {
    return (
        <Vortex
            visible={true}
            height="120"
            width="120"
            ariaLabel="vortex-loading"
            wrapperStyle={customStyles ? customStyles : {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            margin: '0 auto',
                        }}
            colors={[
                '#E6533C',
                '#EF8964',
                '#EFA082',
                '#E6533C',
                '#EF8964',
                '#EFA082',
            ]}
        />
    );
};

export { Loader };
