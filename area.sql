SELECT DISTINCT A.IDAreaMedica,A.cDescripcion FROM Ctl_Servicios S(NOLOCK) INNER JOIN
	Ctl_AreasMedicas A(NOLOCK) ON S.IDServicio=A.IDServicio INNER JOIN
	Areas_Unidades AU(NOLOCK) ON S.IDServicio=AU.IDServicio AND A.IDAreaMedica=AU.IDAreaMedica AND AU.cPabellon='S' AND AU.cStatus='A'
WHERE S.IDServicio='58' ORDER BY A.IDAreaMedica




SELECT H.cCve_Cama,S.IDServicio,S.cDescripcion,A.IDAreaMedica,A.cDescripcion,H.IDPaciente,P.cNombre + ' ' + P.cPaterno + ' ' + P.cMaterno AS Nombre 
                                FROM HGC_ADMISION H(NOLOCK) INNER JOIN
                                        CTL_Pacientes P(NOLOCK) ON P.IDPaciente=H.IDPaciente AND H.cStatus='H' INNER JOIN
                                        Ctl_Servicios S(NOLOCK) ON S.IDServicio=H.IDServicio INNER JOIN
                                Ctl_AreasMedicas A(NOLOCK) ON A.IDServicio=H.IDServicio AND A.IDAreaMedica=H.IDAreaMedica
                                WHERE A.cDescripcion='GINECOCIRUGIA'
                                ORDER BY H.cCve_Cama

INSTRUCCIONES
SELECT M.cDescripcion AS Solucion,Pr.cDescripcion AS Presentacion,SI.CDOSIS AS Comentarios, DI.CNUM_NOTA_INDICACION AS FolioIndicacion,CD.cDescripcion AS Dieta,DI.CCANTIDAD AS Cantidad,MA.CLATIPDATNOM AS Metodo,DI.NVECES_DIA AS Tomas,
                                            DI.COBSERVACION AS Comentario,DI.CTIPO_INDICACION AS Estatus
                                    FROM CTL_Pacientes P (NOLOCK)
                                    INNER JOIN HGC_ADMISION AD (NOLOCK) ON AD.IDPaciente=P.IDPaciente AND AD.cStatus='H' 
                                    INNER JOIN HGC_NOTA_INDICACION_DIETA DI (NOLOCK) ON DI.CNUM_CONTROL=AD.cNum_Control AND DI.CTIPO_INDICACION<>'S' 
                                    AND DI.CNUM_NOTA_INDICACION=(SELECT MAX(CNUM_NOTA_INDICACION) FROM HGC_NOTA_INDICACION_DIETA DII(NOLOCK) 
                                    WHERE DII.CNUM_CONTROL=AD.cNum_Control)
                                     INNER JOIN Ctl_Dietas CD (NOLOCK) ON CD.cCve_Dieta=DI.CCVE_DIETA 
                                    INNER JOIN ADT_TIPOSDATOSCHECKS MA (NOLOCK) ON MA.CLATIPDAT=DI.CMETODO_ALIMENTACION AND MA.TIPODATO='70'
                                    
                                    
                                    INNER JOIN HGC_NOTA_INDICACION_SOLUCION SI (NOLOCK) ON SI.CNUM_CONTROL=AD.cNum_Control AND SI.CTIPO_INDICACION<>'S' 
 AND SI.CNUM_NOTA_INDICACION=(SELECT MAX(CNUM_NOTA_INDICACION) FROM HGC_NOTA_INDICACION_SOLUCION SII(NOLOCK) 
 WHERE SII.CNUM_CONTROL=AD.cNum_Control)
  INNER JOIN Ctl_Medicamentos M(NOLOCK) ON M.cCve_Medicamento=SI.CCVE_SOLUCION 
  INNER JOIN Ctl_Presentaciones Pr(NOLOCK) ON Pr.IDPresentacion=SI.IDPRESENTACION
                                    
                                    
                                    WHERE P.IDPaciente='ZARP801209MSLZBTZZ'