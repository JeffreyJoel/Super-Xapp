import * as React from 'react';
import { Connector, useConnect } from 'wagmi';

function WalletOption({
    connector,
    onClick,
  }: {
    connector: Connector;
    onClick: () => void;
  }) {
    const [ready, setReady] = React.useState(false);
  
    React.useEffect(() => {
      (async () => {
        const provider = await connector.getProvider();
        setReady(!!provider);
      })();
    }, [connector]);
  
    return (
      <button disabled={!ready} onClick={onClick}>
        {connector.name}
      </button>
    );
}

// Updated WalletOptions using WalletOption
export function WalletOptions() {
    const { connectors, connect } = useConnect();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleConnect = (connector: Connector) => {
        connect({ connector });
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={toggleDropdown}>
                Connect Wallet
            </button>
            {isOpen && (
                <ul style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                    padding: '12px 16px',
                    zIndex: 1,
                    listStyle: 'none',
                    margin: 0
                }}>
                    {connectors.map((connector) => (
                        <li key={connector.id} style={{ marginBottom: '8px' }}>
                            <WalletOption
                                connector={connector}
                                onClick={() => handleConnect(connector)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
