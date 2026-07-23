SET SERVEROUTPUT ON;

BEGIN
    FOR l IN (
        SELECT c.Name,l.LoanID,l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID=l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE+30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder : '||l.Name||
            ' Loan ID : '||l.LoanID||
            ' Due Date : '||
            TO_CHAR(l.EndDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/