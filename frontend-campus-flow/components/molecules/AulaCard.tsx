import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../config/theme';
import { Typography } from '../atoms/Typography';
import { Badge, BadgeType } from '../atoms/Badge';

interface AulaCardProps {
  nombreAula: string;
  ubicacion: string;
  profesor: string;
  materia: string;
  horario: string;
  tiempoRestante: string;
  estudiantes: number;
  status: BadgeType;
}

export const AulaCard = (props: AulaCardProps) => {
  const getBorderColor = () => {
    if (props.status === 'OCUPADO') return theme.colors.error;
    if (props.status === 'PROXIMO') return theme.colors.primary;
    return theme.colors.primary; // Azul por defecto para disponible
  };

  return (
    <View style={[styles.card, { borderColor: getBorderColor() }]}>
      
      {/* Header: Título, Ubicación y Estado */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Typography variant="h3" text={props.nombreAula} />
          <Typography variant="body" text={props.ubicacion} />
        </View>
        <Badge type={props.status} />
      </View>

      {/* Badge del Profesor */}
      <View style={{ marginBottom: 16 }}>
        <Badge type="INFO" text={props.profesor} />
      </View>

      {/* Grid de Información (Cajas Grises) */}
      <View style={styles.grid}>
        <View style={styles.infoBox}>
          <Typography variant="label" text="Materia" />
          <Typography variant="body" text={props.materia} color={theme.colors.black} style={styles.valueText} />
        </View>
        <View style={styles.infoBox}>
          <Typography variant="label" text="Horario" />
          <Typography variant="body" text={props.horario} color={theme.colors.black} style={styles.valueText} />
        </View>
        <View style={styles.infoBox}>
          <Typography variant="label" text="Tiempo Restante" />
          <Typography variant="body" text={props.tiempoRestante} color={theme.colors.tertiary} style={styles.valueText} />
        </View>
        <View style={styles.infoBox}>
          <Typography variant="label" text="Estudiantes" />
          <Typography variant="body" text={props.estudiantes.toString()} color={theme.colors.black} style={styles.valueText} />
        </View>
      </View>

      {/* Footer: Íconos y Recursos */}
      <View style={styles.footer}>
        <View style={styles.recursoItem}>
          <Ionicons name="desktop-outline" size={18} color={theme.colors.secondary} />
          <Typography variant="label" text="28 PCs" color={theme.colors.black} style={{ textTransform: 'none' }}/>
        </View>
        <View style={styles.recursoItem}>
          <Ionicons name="videocam-off-outline" size={18} color={theme.colors.secondary} />
          <Typography variant="label" text="Sin Proyector" color={theme.colors.black} style={{ textTransform: 'none' }}/>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    borderWidth: 2,
    padding: 16,
    width: '100%',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  infoBox: {
    width: '48%', // Para que queden 2 columnas
    backgroundColor: theme.colors.neutralLight,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  valueText: {
    fontWeight: '600',
    marginTop: 2,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    paddingTop: 8,
  },
  recursoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  }
});