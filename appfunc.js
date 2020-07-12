$('#btn-get').on('click', function() {
	  var result = $('#builder').queryBuilder('getRules');
	  if ($.isEmptyObject(result)) return;
	 	//console.log(JSON.stringify(result, null, 2));
	  //console.log(result);
	  var sql = "";
	  for (var rule of result.rules) {
	   //console.log(rule);
	   if (sql) sql += " " + result.condition;
	   	sql += rule.id + " 	" + rule.operator + " " + rule.value + " == ";
	  }
	  console.log(sql);

	});

	$('#btn-reset').on('click', function() {
	  $('#builder').queryBuilder('reset');
	});

	// $('#btn-set').on('click', function() {
	//   var result = $('#builder').queryBuilder('getRules');
	//   if (!$.isEmptyObject(result)) {
	//   	rules_basic = result;
	//   }
	// });

	$('#builder').on('getRules.queryBuilder.filter', function(e) {
	});

	function getOperator()
	{

	};

