//------ Mediator Pattern -------------
//

var mediator() = {};

var orgChart = {
  addNewEmployee : function() {
    var empDetail = this.getEmpDetail();
    
    empDetail.on("complete", function(employee) {
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee) {
        employee.save();
      });
    });
  },
}

