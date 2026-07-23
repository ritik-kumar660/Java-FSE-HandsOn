ALTER TABLE Customers
ADD IsVIP CHAR(1) DEFAULT 'N';

SET SERVEROUTPUT ON;

BEGIN
    FOR c IN (SELECT CustomerID,Balance FROM Customers)
    LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP='Y'
            WHERE CustomerID=c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP customers updated');
END;
/