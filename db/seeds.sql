INSERT INTO department (name)
VALUES ("Web Development"),
       ("Marketing"),
       ("Sales"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 120000.00, 1), #1
       ("Designer", 90000.00, 1), #2
       ("Content Creator", 90000.00, 2), #3
       ("Ads Manager", 95000.00, 2), #4
       ("Account Exec", 75000.00, 3), #5
       ("Sales Manager", 150000.00, 3), #6
       ("Accountant", 95000.00, 4), #7
       ("Bookeeper", 65000.00, 4); #8

       INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob","Smith", 1, NULL), #1
       ("Jill","Fox", 1, NULL), #2
       ("Jamie","Dean", 3, NULL), #3
       ("Lisa","Smith", 4, NULL), #4
       ("Alex","Torres", 1, NULL), #5
       ("John","Liu", 4, NULL), #6
       ("Percy","Jackson", 6, NULL), #7
       ("Alicia","Keyes", 5, 7), #8
       ("Michael","Crighton", 5, 7), #9
       ("Jasper","Johns", 2, NULL), #10
       ("Lindsey","Larkin", 7, NULL), #11
       ("Jennifer","Giunta", 8, 11); #12
    