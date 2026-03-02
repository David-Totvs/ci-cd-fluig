const fs = require('fs');
var soap = require('soap');

try {
    const datasetContent = fs.readFileSync("./datasets/ds_ci_cd_sample.js", 'utf8');
    const timestampSeconds = Math.floor(Date.now() / 1000);

    var url = 'https://fluigdev.sebrae.com.br/webdesk/ECMDatasetService?wsdl';
    const args = {
                    companyId : Number(1),
                    username: String('david.allan'),
                    password: String('sebrae123'),
                    name: String('ds_teste_soap'),
                    description : String('teste soap ' + timestampSeconds),
                    impl: datasetContent
                };

    soap.createClient(url, function (err, client) {
        if (err) {
            console.error('Erro ao criar cliente ===========:', err);
            return;
        }

        //Chame o método SOAP desejado
        client.updateDataset(args, function (err, result) {
            if (err) {
                console.error('Erro na chamada SOAP: +++++++++', err);
                return;
            } else{
                console.log("OK @@@@@@@@@@")
            }
            console.log('Resultado:', result);
        });
    });

} catch (error) {
    console.log("caiu error")
}

