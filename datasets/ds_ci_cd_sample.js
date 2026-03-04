function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn('VERSION');
	dataset.addRow(["0.6"]);
	return dataset;
}
function onMobileSync(user) {

}