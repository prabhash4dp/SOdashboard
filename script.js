let data = [];

Papa.parse("data.csv", {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        data = results.data;

        const select = document.getElementById("officeSelect");
        select.innerHTML = '<option value="">-- Select Office --</option>';

        data.forEach(row => {
            if (row.Office) {
                const option = document.createElement("option");
                option.value = row.Office;
                option.textContent = row.Office;
                select.appendChild(option);
            }
        });

    }
});

document.getElementById("officeSelect").addEventListener("change", function () {

    const office = this.value;

    const row = data.find(item => item.Office === office);

    if (!row) return;

    document.getElementById("officeName").textContent = row.Office;
    document.getElementById("opened").textContent = row.Opened;
    document.getElementById("closed").textContent = row.Closed;
    document.getElementById("net").textContent = row.NetAddition;

});