Imports System

Module Program
    Sub Main(args As String())
        For num As Integer = 1 To 25
            Console.Write("{0,-4}", num)
            If (num Mod 5) = 0 Then
                Console.WriteLine()
            End If
        Next
    End Sub
End Module
