
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.listOfPatch = [
      {
      "id": "582e7778c3cd8308de934aae",
      "patchName": "Vivek",
      "patchId": "e7d022e2bc",
      "patchType": "CREDIT PATCH",
      "patchDetails": "Hi Hello"
   },
      {
      "id": "582e83f2c3cd8025c98e76e7",
      "patchName": "TEST PATCH",
      "patchId": "22a3f2a0d8",
      "patchType": "TEST REQUEST",
      "patchDetails": "[{ \"op\": \"add\", \"path\": \"/1\",\"value\":{\"getAccount\":{\"WFContext\":\"\",\"selectedAccount\":{\"keyGrp1\":\"\"}}}},\n\n {\"op\": \"add\", \"path\": \"/1/getAccount/WFContext\", \"value\": {\n \"invokerId\": \"WIB\",\n \"subActivitySourceId\": \"CU\", \n \"originatorId\": \"UNKNOWN\",\n \"sessionSequenceNumber\":\"\",\n \"messageId\": \"4dd80028-e0f1-43fa-8929-8f493fc8055e\",\n \"activitySourceId\": \"0055\",\n \"billingAU\": 5122,\n \"creationTimestamp\": \"2016-06-29T22:23:26.2490Z\",\n \"sessionId\": \"a306f874-700f-4db7-bd54-76fe62720bb3-\",\n \"activitySourceIdType\": \"MWS\",\n \"initiatorIdType\": \"UNKNOWN\",\n \"originatorIdType\": \"UNKNOWN\",\n \"initiatorId\": \"UNKNOWN\",\n \"additionalContext\": \"\",\n \"refToMessageId\": \"\",\n \"hostName\": \"SF1-ACID-IWB-TO\"\n}},\n{\"op\": \"move\", \"from\": \"/account\", \"path\":\"/1/getAccount/selectedAccount/keyGrp1\"},\n{\"op\": \"move\", \"from\": \"/1\", \"path\":\"\"}\n]"
   },
      {
      "id": "582e852fc3cd088f1ef720f5",
      "patchName": "escape java",
      "patchId": "80a78ef5a9",
      "patchType": "TEST REQUEST",
      "patchDetails": "[{ \\\"op\\\": \\\"add\\\", \\\"path\\\": \\\"/1\\\",\\\"value\\\":{\\\"getAccount\\\":{\\\"WFContext\\\":\\\"\\\",\\\"selectedAccount\\\":{\\\"keyGrp1\\\":\\\"\\\"}}}},\\n\\n {\\\"op\\\": \\\"add\\\", \\\"path\\\": \\\"/1/getAccount/WFContext\\\", \\\"value\\\": {\\n \\\"invokerId\\\": \\\"WIB\\\",\\n \\\"subActivitySourceId\\\": \\\"CU\\\", \\n \\\"originatorId\\\": \\\"UNKNOWN\\\",\\n \\\"sessionSequenceNumber\\\":\\\"\\\",\\n \\\"messageId\\\": \\\"4dd80028-e0f1-43fa-8929-8f493fc8055e\\\",\\n \\\"activitySourceId\\\": \\\"0055\\\",\\n \\\"billingAU\\\": 5122,\\n \\\"creationTimestamp\\\": \\\"2016-06-29T22:23:26.2490Z\\\",\\n \\\"sessionId\\\": \\\"a306f874-700f-4db7-bd54-76fe62720bb3-\\\",\\n \\\"activitySourceIdType\\\": \\\"MWS\\\",\\n \\\"initiatorIdType\\\": \\\"UNKNOWN\\\",\\n \\\"originatorIdType\\\": \\\"UNKNOWN\\\",\\n \\\"initiatorId\\\": \\\"UNKNOWN\\\",\\n \\\"additionalContext\\\": \\\"\\\",\\n \\\"refToMessageId\\\": \\\"\\\",\\n \\\"hostName\\\": \\\"SF1-ACID-IWB-TO\\\"\\n}},\\n{\\\"op\\\": \\\"move\\\", \\\"from\\\": \\\"/account\\\", \\\"path\\\":\\\"/1/getAccount/selectedAccount/keyGrp1\\\"},\\n{\\\"op\\\": \\\"move\\\", \\\"from\\\": \\\"/1\\\", \\\"path\\\":\\\"\\\"}\\n]"
   },
      {
      "id": "582e866dc3cd52fd0de3a77b",
      "patchName": "CREDIT CARD PATCH",
      "patchId": "27ae238826",
      "patchType": "REQUEST",
      "patchDetails": "[{ \\\"op\\\": \\\"add\\\", \\\"path\\\": \\\"/1\\\",\\\"value\\\":{\\\"getAccount\\\":{\\\"WFContext\\\":\\\"\\\",\\\"selectedAccount\\\":{\\\"keyGrp1\\\":\\\"\\\"}}}},\\n\\n {\\\"op\\\": \\\"add\\\", \\\"path\\\": \\\"/1/getAccount/WFContext\\\", \\\"value\\\": {\\n \\\"invokerId\\\": \\\"WIB\\\",\\n \\\"subActivitySourceId\\\": \\\"CU\\\", \\n \\\"originatorId\\\": \\\"UNKNOWN\\\",\\n \\\"sessionSequenceNumber\\\":\\\"\\\",\\n \\\"messageId\\\": \\\"4dd80028-e0f1-43fa-8929-8f493fc8055e\\\",\\n \\\"activitySourceId\\\": \\\"0055\\\",\\n \\\"billingAU\\\": 5122,\\n \\\"creationTimestamp\\\": \\\"2016-06-29T22:23:26.2490Z\\\",\\n \\\"sessionId\\\": \\\"a306f874-700f-4db7-bd54-76fe62720bb3-\\\",\\n \\\"activitySourceIdType\\\": \\\"MWS\\\",\\n \\\"initiatorIdType\\\": \\\"UNKNOWN\\\",\\n \\\"originatorIdType\\\": \\\"UNKNOWN\\\",\\n \\\"initiatorId\\\": \\\"UNKNOWN\\\",\\n \\\"additionalContext\\\": \\\"\\\",\\n \\\"refToMessageId\\\": \\\"\\\",\\n \\\"hostName\\\": \\\"SF1-ACID-IWB-TO\\\"\\n}},\\n{\\\"op\\\": \\\"move\\\", \\\"from\\\": \\\"/account\\\", \\\"path\\\":\\\"/1/getAccount/selectedAccount/keyGrp1\\\"},\\n{\\\"op\\\": \\\"move\\\", \\\"from\\\": \\\"/1\\\", \\\"path\\\":\\\"\\\"}\\n]"
   }
];


  $scope.people = [
    {name: "Bob", gender: "Male", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi quis mi tincidunt luctus ut quis nunc. Nam non risus tincidunt risus sodales condimentum. Morbi sed gravida elit. Nunc a turpis vestibulum elit posuere blandit. Phasellus luctus lectus non porta auctor. Etiam pellentesque imperdiet posuere. Nullam adipiscing congue nisl, in vulputate odio ornare ac."},
    {name: "Jane", gender: "Female", details: "Maecenas quis sodales lectus, vitae convallis ipsum. Ut ac viverra tellus. Quisque vulputate, orci placerat eleifend scelerisque, eros nunc rutrum odio, pharetra mattis leo neque vel eros. Cras id purus nec lorem vehicula rutrum a vel arcu. Quisque eget euismod augue. Integer volutpat auctor lorem, quis lacinia nisl tempus nec. Nunc fringilla, odio eget molestie varius, tortor turpis dignissim lacus, sed varius nunc velit eu turpis. Etiam sed congue diam. In ornare elit nec dolor faucibus ornare. Ut eget erat vel elit tristique iaculis. Maecenas et semper lorem. Nam mollis ante et ipsum vestibulum posuere. Ut non purus non risus tempor vulputate et vitae ipsum. Mauris et sem sit amet quam pulvinar fringilla."},
    {name: "Bill", gender: "Male", details: "Quisque rhoncus scelerisque sapien, tempor vestibulum dui tincidunt eu. Maecenas scelerisque, dolor sed vehicula pulvinar, ligula erat ornare arcu, in dictum ipsum libero vel est. Donec porttitor venenatis lacus, a laoreet orci. Proin quam mi, ultrices in ullamcorper vel, malesuada suscipit lectus. Nam faucibus commodo quam, auctor vehicula felis condimentum quis. Phasellus tempor molestie enim, at vehicula justo auctor eu. Pellentesque venenatis elit eu malesuada fringilla."}
  ];

});

