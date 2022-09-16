INSERT INTO department (id, name)
VALUES (5, "Web Development"),
       (10, "Marketing"),
       (15, "Sales"),
       (20, "Accounting");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Developer", 50000.00, 5),
       (2, "Designer", 45000.00, 5),
       (3, "Content Creator", 45000.00, 10),
       (4, "Ads Manager", 45000.00, 10),
       (5, "Account Exec", 45000.00, 15),
       (6, "Sales Manager", 45000.00, 15),
       (7, "Accountant", 45000.00, 20),
       (8, "Bookeeper", 45000.00, 20);

       INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (100, "Bob","Smith", 1),
       (200, "Designer", 45000.00, 5),
       (300, "Content Creator", 45000.00, 10),
       (400, "Ads Manager", 45000.00, 10),
       (500, "Account Exec", 45000.00, 15, 600),
       (600, "Sales Manager", 45000.00, 15),
       (700, "Accountant", 45000.00, 20),