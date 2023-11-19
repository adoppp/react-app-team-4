import { Vortex } from 'react-loader-spinner';

const Loader = ({ customStyles }) => {
    return (
        <div style={customStyles ? customStyles : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            backgroundColor: '#04040466',
            position: `absolute`,
            top: 0,
            left: 0,
            zIndex: 1000,
            height: '100vh',
            width: `100vw`,
        }}>
            <Vortex
                visible={true}
                height="120"
                width="120"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                colors={[
                    '#E6533C',
                    '#EF8964',
                    '#EFA082',
                    '#E6533C',
                    '#EF8964',
                    '#EFA082',
                ]}
            />
        </div>
    );
};

export { Loader };
