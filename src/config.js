global.SALT_KEY = '1111';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store !';

module.exports = {
    connectionString: 'CONEXÃO STRING DO MONGO DB',
    sendgridKey: 'INSIRA AQUI A KEY DO SENDGRID PARA ENVIO DOS EMAILS',
    containerConnectionString: 'TDB'
}