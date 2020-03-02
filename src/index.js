import oracledb from 'oracledb';

console.log('Connecting to Oracle DB...')

oracledb
    .createPool({
        user: 'test',
        password: 'test',
        connectString: 'localhost:1521/test'
    })
    .then(() => {
        console.log('Connected!');
        process.exit(0);
    })
    .catch(err => {
        console.error(`Failed to connect: ${err}`);
        process.exit(1);
    })
