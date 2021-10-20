Imports System

Module Program
    Sub Main()

        Dim N, i As Integer
        'N is being used to store the prime numbers & i for our iteration.
        Dim b As Boolean

        Console.WriteLine(" Prime Number From 1 to 100 = ")

        b = True

        While N <= 100
            b = True  'we declaring that our N must be less than 100, by seting the boolean b to True.
            i = 2

            While i < N
                If N Mod i = 0 Then
                    b = False
                    GoTo break

                End If
                i += 1
            End While
break:
            If b Then
                Console.WriteLine(N)
            End If
            N += 1
        End While


        Console.ReadKey()

    End Sub
End Module
