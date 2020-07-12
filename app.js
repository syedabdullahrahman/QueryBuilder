    $('#builder').queryBuilder({
	  plugins: ['bt-tooltip-errors'],
	  
	  filters: [{
	    id: 'i_tx_count',
	    label: 'Expected number of transaction(Monthly)',
	    type: 'integer',
	    validation: {
	     	min: 0,
	      	step: 1
	     }
	   }, {
	    id: 'i_total_value',
	    label: 'Expected total amount (Monthly)',
	    type: 'double',
	    validation: {
	     	min: 0,
	      	step: 1
	     }
	   }, {
	    id: 'i_min_tx_value',
	    label: 'Minimum amount (Per transaction)',
	    type: 'double',
	    validation: {
	     	min: 0,
	      	step: 0.01
	     }
	   }, {
	    id: 'i_max_tx_value',
	    label: 'Maximum amount (Per transaction)',
	    type: 'double',
	    validation: {
	     	min: 0,
	      	step: 0.01
	     }
	   }, {
	    id: 'i_cash_th_value',
	    label: 'Cash threshold amount (Per transaction)',
	    type: 'double',
	    validation: {
	     	min: 0,
	      	step: 0.01
	     }
	   }, {
	    id: 'i_max_swift_tx',
	    label: 'Maximum amount for SWIFT transaction (Per Transaction)',
	    type: 'double',
	    validation: {
	     	min: 0,
	      	step: 0.01
	     }
	   }, {
	    id: 'i_dormant_days',
	    label: 'Dormant in days(Account inactivity)',
	    type: 'integer',
	    validation: {
	     	min: 0,
	      	step: 1
	     }
	   }, {
	    id: 'i_dormant_react_days',
	    label: 'Dormant reactivation activity in days',
	    type: 'integer',
	    validation: {
	     	min: 0,
	      	step: 1
	     }
	  }],
	});

	







	$('#btn-get-sql').on('click', function() {
  var result = $('#builder').queryBuilder('getSQL');
if (result.sql.length) {
    //alert(result.sql + '\n\n' + JSON.stringify(result.params, null, 2));
    var finalsql ="SELECT * FROM T_TP_RULES WHERE "+ result.sql + ";";
    document.getElementById("para").innerHTML=finalsql;
  }
});